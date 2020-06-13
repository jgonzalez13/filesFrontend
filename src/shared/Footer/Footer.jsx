import React from 'react'
import './footer.css'

const Footer = () => (
  <footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h6>Nosotros</h6>
        <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ab vero minus consequatur vitae quidem beatae facere doloremque rem eum porro cumque expedita amet ex placeat, earum, accusamus officiis voluptate doloribus ipsa voluptas facilis adipisci. Corporis ipsam distinctio explicabo in magni est enim laborum ducimus incidunt eaque, eos voluptatibus earum dolor! Aliquid ratione ipsam dolore iste amet omnis sunt aliquam nemo quod reprehenderit incidunt, distinctio laudantium, rem deleniti excepturi voluptate.</p>
      </div>

      <div class="col-xs-6 col-md-3">
        <h6>Servicios</h6>
        <ul class="footer-links">
          <li><a href="">Litigo</a></li>
          <li><a href="">Asesoria</a></li>
          <li><a href="">Derecho civil</a></li>
          <li><a href="">Derecho penal</a></li>
          <li><a href="">Legitima defensa</a></li>
        </ul>
      </div>

      <div class="col-xs-6 col-md-3">
        <h6>Empresa</h6>
        <ul class="footer-links">
          <li><a href="">Nosotros</a></li>
          <li><a href="">Contacto</a></li>
          <li><a href="">Contribuir</a></li>
          <li><a href="">Politicas de privacidad</a></li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-sm-6 col-xs-12">
        <p class="copyright-text">Copyright &copy; 2020 todos los derechos reservados 
     <a href="#">Universidad de colima</a>.
        </p>
      </div>

      <div class="col-md-4 col-sm-6 col-xs-12">
        <ul class="social-icons">
          <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
          <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
        </ul>
      </div>
    </div>
  </div>
</footer>
)

export default Footer
