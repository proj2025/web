/* global $filter */

const filter = document.location.search.replace(/^\?/, '')

if (filter.length > 0) {
  document.querySelectorAll('p').forEach($p => {
    const $note = $p.nextElementSibling
    const hasNote = $note && $note.tagName === 'ASIDE'
    if ($p.innerText.toLowerCase().includes(filter.trim().toLowerCase())) {
      $p.style.display = 'block'
      if (hasNote) {
        $note.style.display = 'block'
      }
    } else {
      $p.style.display = 'none'
      if (hasNote) {
        $note.style.display = 'none'
      }
    }
  })
  document.querySelectorAll('section').forEach($section => {
    let display = 'none'
    $section.querySelectorAll('p').forEach($p => {
      if ($p.style.display === 'block') {
        display = 'grid'
      }
    })
    $section.style.display = display
  })
  $filter.innerText = '(' + filter + ')'
}
