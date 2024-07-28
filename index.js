// BEGIN Matomo
/* global _paq:writable */
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView'])
_paq.push(['enableLinkTracking']);
(function () {
  const u = 'https://proj2025xyz.matomo.cloud/'
  _paq.push(['setTrackerUrl', u + 'matomo.php'])
  _paq.push(['setSiteId', '1'])
  const d = document
  const g = d.createElement('script')
  const s = d.getElementsByTagName('script')[0]
  g.async = true
  g.src = 'https://cdn.matomo.cloud/proj2025xyz.matomo.cloud/matomo.js'
  s.parentNode.insertBefore(g, s)
})()
// END Matomo
