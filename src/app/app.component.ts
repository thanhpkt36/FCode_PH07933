import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if(navbar!=null){
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace("w3-animate-top w3-white", "");
      }
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: "PT14305-UD"
  constructor() {
    
  }

  ngOnInit() {
  }

  connect_fb(){
    Swal.fire(
      'Kết nối đến Facebook!',
      'Vừa bấm kết nối đến Facebook',
      'success'
    )
  }

  connect_ins(){
    Swal.fire(
      'Kết nối đến Instagram!',
      'Vừa bấm kết nối đến Instagram',
      'success'
    )
  }

  connect_gg(){
    Swal.fire(
      'Kết nối đến Google!',
      'Vừa bấm kết nối đến Google',
      'success'
    )
  }

  loadMore(){
    Swal.fire({
      title: 'Ở đây không có gì hết!',
      width: 600,
      padding: '3em',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media1.giphy.com/media/sIIhZliB2McAo/giphy.gif")
        top
        no-repeat
      `
    })
  }

  onClick(element) {
    var e = <HTMLImageElement>document.getElementById("img01");
    console.log(element);
    e.src = element.target.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.target.alt;
  }

  toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
  }

  
}
