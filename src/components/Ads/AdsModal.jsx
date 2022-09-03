/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from 'react';
import Modal, { CloseButton } from 'react-dre/lib/Modal';
import { useNavigate } from 'react-router-dom';
import { AdsCard } from './Styles';

function AdsModal({ isOpen, title, desc, image, link, id }) {
  const [showAds, setShowAds] = useState(false);
  const navigate = useNavigate();

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
    const finalAdIds = [...new Set(adsIds?.length ? [...adsIds, id] : [id])]; // make sure ad id unique
    localStorage.setItem('andreas-ads', JSON.stringify(finalAdIds));
    localStorage.setItem('last-visited', new Date().getTime());
  }, [id]);

  useEffect(() => {
    handleShowAds();
  }, [handleShowAds]);

  if (!showAds) return null;

  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => {
        setShowAds(false);
      }}
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
      <AdsCard onClick={() => navigate(link)}>
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

export default AdsModal;
