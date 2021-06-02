/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Modal, { CloseButton } from 'react-dre/lib/Modal';
import { AdsCard } from './Styles';

function AdsModal({
  isOpen,
  handleClose,
  title,
  desc,
  image,
  link,
  history,
  id,
}) {
  const [showAds, setShowAds] = useState(false);

  const handleShowAds = useCallback(() => {
    let adsIds = localStorage.getItem('andreas-ads');
    const lastVisited = localStorage.getItem('last-visited');
    const interval = 1 * 3600 * 1000; // 1 hour
    const adsExpired =
      lastVisited && new Date().getTime() - lastVisited > interval;

    try {
      if (adsIds) adsIds = JSON.parse(adsIds);
      if (adsIds?.length && adsIds.includes(id) && !adsExpired) return;
    } catch (err) {
      localStorage.removeItem('andreas-ads');
    }

    setShowAds(true);
    localStorage.removeItem('andreas-ads');
    localStorage.setItem(
      'andreas-ads',
      JSON.stringify(adsIds?.length ? [...adsIds, id] : [id]),
    );
    localStorage.setItem('last-visited', new Date().getTime());
  }, [id]);

  useEffect(() => {
    handleShowAds();
  }, [handleShowAds]);

  if (!showAds) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnOverlayClick
      styles={{
        overlayStyle: {
          zIndex: 20,
          background: 'rgba(255,255,255, 0.5)',
        },
        contentStyle: {
          padding: 0,
        },
      }}
    >
      <AdsCard onClick={() => history.push(link)}>
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            setShowAds(false);
          }}
        />
        <img src={image} alt="modal" />
        <h1>{title}</h1>
        <div className="description">{desc}</div>
      </AdsCard>
    </Modal>
  );
}

export default withRouter(AdsModal);
