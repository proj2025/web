/* global $search */

$search.onkeyup = () => {
  const search = $search.value.trim().toLowerCase()
  if (search.length === 0) {
    return
  }
  document.querySelectorAll('p').forEach($p => {
    const $note = $p.nextElementSibling
    const hasNote = $note && $note.tagName === 'ASIDE'
    if ($p.innerText.toLowerCase().includes(search)) {
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
        display = 'block'
      }
    })
    $section.style.display = display
  })
}
