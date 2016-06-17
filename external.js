import wistiaCreator from './vendor/external-api';

export let Wistia;

export default function() {
  return new Promise((resolve, reject) => {
    window._wapiq = window._wapiq || [handle => {
      Wistia = handle;
      resolve(handle);
    }];
  });
}
