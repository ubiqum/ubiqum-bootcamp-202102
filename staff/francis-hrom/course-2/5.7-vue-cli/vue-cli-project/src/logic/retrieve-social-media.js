/**
 * Access url via proxy and retrieve social media links
 *
 * @param {*} url Website from which social media links should be extracted
 * @returns {Object} Object with social media links
 */

export default function retrieveSocialMedia(url) {
  return fetch("https://b00tc4mp.herokuapp.com/proxy?url=" + url)
    .then((res) => res.text())
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");

      const items = [...doc.links].map((link) => link.href);

      const results = {};

      items.forEach((item) => {
        if (
          /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*([\w-]*)/.test(
            item
          )
        ) {
          results.facebook = item;
        }
        if (
          /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/.test(
            item
          )
        ) {
          results.twitter = item;
        }

        if (
          /(https?:\/\/)?(www\.)?youtube\.com\/(channel|user)\/[\w-]+/.test(
            item
          )
        ) {
          results.youtube = item;
        }
      });

      return results;
    });
}
