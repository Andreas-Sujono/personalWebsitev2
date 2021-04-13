import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal } from 'react-dre/Modal';
import './style.scss';

function AdsModal({
  isOpen,
  handleClose,
  clickOutsideToClose,
  title,
  desc,
  image,
  link,
  history,
  id,
}) {
  const [showAds, setShowAds] = useState(false);

  useEffect(() => {
    handleShowAds();
  }, []);

  const handleShowAds = () => {
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
  };

  if (!showAds) return null;

  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      clickOutsideToClose={clickOutsideToClose}
      maxWidth="500px"
    >
      <div className="ads-modal-content" onClick={() => history.push(link)}>
        <img src={image} alt="modal" />
        <h1>{title}</h1>
        <div className="description">{desc}</div>
      </div>
    </Modal>
  );
}

export default withRouter(AdsModal);
