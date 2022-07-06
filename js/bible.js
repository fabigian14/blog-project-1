var refTagger = {
  settings: {
      bibleVersion: "NBLA",
      convertHyperlinks: true,
      roundCorners: true,
      socialSharing: ["google"],
      customStyle: {
          heading: {
              backgroundColor: "#1e00c9",
              color: "#ffffff",
              fontFamily: "Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif",
              fontSize: "14px"
          },
          body: {
              color: "#3a3c3f",
              fontSize: "14px"
          }
      }
  }
};
(function (d, t) {
  var n = d.querySelector("[nonce]");
  refTagger.settings.nonce = n && (n.nonce || n.getAttribute("nonce"));
  var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
  g.src = "https://api.reftagger.com/v2/RefTagger.js";
  g.nonce = refTagger.settings.nonce;
  s.parentNode.insertBefore(g, s);
}(document, "script"));