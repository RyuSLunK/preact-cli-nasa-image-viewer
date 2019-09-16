import { createSelector } from 'reselect';
const getImageData = (state) => state.home ? state.home.image : null;
const getAudioData = (state) => state.home ? state.home.audio : null;
const getVideoData = (state) => state.home ? state.home.video : null;
export const makeGetImages = createSelector([getImageData], (data) => data ? data : []);
export const makeGetAudios = createSelector([getAudioData], (data) => data ? data : []);
export const makeGetVideos = createSelector([getVideoData], (data) => data ? data : []);