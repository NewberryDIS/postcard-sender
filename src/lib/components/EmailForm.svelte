<script>

 import { page }  from '$app/stores'
 import { imgUrl } from '$lib'
 export let image
    $: id = $page.params.id || '2KXJ8ZSRY0U_H' 
    $: dataUrl = `https://digital.newberry.org/postcard-sender/${id}` 
    $: dataImg = imgUrl(image, 'large')
 let emailSubject = "Vintage Postcard"
 let emailMessage = `I saw this postcard and thought of you!  ${dataUrl}`
let recipient
</script>


  <div class="form-modal">
<form action="mailto:{recipient}" method="GET" target="_blank">
    <h1 class="title">Start Email to chriscoyier@gmail.com</h1>
    <div class="field"><label class="label" for="subject">Email Subject</label>
        <input name="subject" id="subject" type="text" class="input" value={emailSubject}></div>
    <div class="field"><label class="label" for="body">Email Body</label>
        <textarea class="textarea" name="body" id="body">{ emailMessage }</textarea></div>
    <div><input type="submit" value="Create Email" class="button"></div>
</form>

 </div>

  <style>
.form-modal{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.77);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9006
}
form {
  width: 50%;
  height: 50%;
  background: rgba(var(--bg-color-1), 1);
  border: 1px solid rgba(var(--fg-color-1), 1);
  display: flex;
  flex-direction: column;
}

</style>
