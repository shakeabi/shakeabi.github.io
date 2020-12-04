---
layout: page
title: Contact
permalink: /contact
comments: false
---

<form id="gform" onsubmit="return contactFormSubmit();">    
<p class="mb-4">Please send your message to {{site.name}}. We will reply as soon as possible!</p>
<div class="form-group row">
  <div class="col-md-6">
    <input type="text" class="form-control" placeholder="Name*" name="name" required>
  </div>
  <div class="col-md-6">
    <input type="email" class="form-control" placeholder="Email*"  name="email" required>
  </div>
</div>
<div class="form-group">
  <input type="text" class="form-control" placeholder="Subject*"  name="subject" required>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Message*" required></textarea>    
<input id="contactSubmitBtn" class="btn btn-dark" type="submit" value="Send">
</form>