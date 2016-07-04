import wistiaCreator from './vendor/e-v1';

export let videos = [];

export default function(matcher = '_all') {
  return new Promise((resolve, reject) => {
    window._wq = window._wq || {
      [matcher]: handle => {
        videos.push(handle);
        resolve(videos);
      }
    };
  });
}
