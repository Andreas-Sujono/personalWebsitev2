import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'components/shared/Modal';
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
    const adsIds = localStorage.getItem('andreas-ads');
    const lastVisited = localStorage.getItem('last-visited');
    const interval = 12 * 3600 * 1000;
    const adsExpired =
      lastVisited && new Date().getTime() - lastVisited > interval;

    if (adsIds?.length && adsIds.includes(id) && !adsExpired) return;

    setShowAds(true);
    localStorage.setItem(
      'andreas-ads',
      adsIds?.length ? [...adsIds, id] : [id],
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
