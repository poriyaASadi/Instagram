let $ = document;
// ---------------
const form_open_dialog = $.getElementById('form_open_dialog');
const dialog = $.querySelector('dialog');
const form_show_dialog = $.getElementById('form_show_dialog')


form_open_dialog.addEventListener('click' , () => {
  dialog.showModal();
  $.getElementById('show_slid').classList.add('h-full')
})
 form_show_dialog.addEventListener('click' , () => {
   dialog.close()
   $.getElementById('show_slid').classList.remove('h-full')
 })
