<template>
<div id="dagevosFooter" class="container px-5 pt-mobile greyBackground">
    <div v-if="$route.path !='/contact'" class="row justify-content-md-center">
      <div class=" col-md-9 mb-1">
        <hr>
      </div>
    </div>

  <!--  STANDARD FOOTER -->
  <div v-if="$route.path !='/contact'" class="row">
    <div class="col-sm-6">
      <div class=" py-5 px-4">
        <div class="">
          <p class="smallText">
            Wil je meer weten en/of vrijblijvend in gesprek gaan?
            <br />
            <i class="fa-fw fa fa-phone" aria-hidden="true"></i>  Bel me op telefoonnummer <a style="text-decoration:none" href="tel:06 51 24 18 61">06 – 51 24 18 61</a>
            <br />

            <i class="fa-fw fa fa-envelope-o" aria-hidden="true"></i> Mail me via <a style="text-decoration:none" href="mailto:rene@hetechtewerkt.nl"> <span class=""> rene@hetechtewerkt.nl</span></a>
            <br />
            <i class="fa-fw fa fa-coffee" aria-hidden="true"></i> Of beter nog: kom een goeie kop koffie drinken in Rotterdam.
          </p>
        </div>
      </div>

    </div>

    <div class="col-sm-6">
      <div class="p-5">
        <div class="">
          <p class="smallText">
            <span class="hetwerkticon"><img  src="/faviconsm.svg" /></span> Het Echte Werkt! | Leiderschapsontwikkeling
            <br />
            <a style="text-decoration:none" href="https://goo.gl/maps/WavUb5WFYVL2" target="_blank">De Fabriek van Delfshaven<br /> Mathenesserdijk 416-J<br /> 3026 GV Rotterdam</a>
            <br />
            <i class="fa-fw fa fa-copyright" aria-hidden="true"></i> 2017 Het Echte Werkt! | Leiderschapsontwikkeling
          </p>
        </div>
      </div>
    </div>
  </div>




  <!--  CONTACT FOOTER -->
  <div v-else class="row">
    <div class="col-sm-6">
      <div class=" py-5 px-4">
        <div class="">
          <p class="smallText">
            <i class="fa-fw fa fa-heart-o" aria-hidden="true"></i> Website door <a href="https://template-studio.nl" target="_blank" rel="noopener">Template Studio</a> en <a href="http://pumphouse.nl/" target="_blank" rel="noopener">The Pumphouse</a>
            <br />
            <i class="fa-fw fa fa-camera-retro" aria-hidden="true"></i> Foto's door Carola Roos
          </p>
        </div>
      </div>

    </div>

    <div class="col-sm-6">
      <div class="p-5">
        <div class="">
          <p class="smallText">
            <span class="hetwerkticon"><img  src="/faviconsm.svg" /></span> Het Echte Werkt! | Leiderschapsontwikkeling
            <br />
            <i class="fa-fw fa fa-copyright" aria-hidden="true"></i> {{(new Date()).getFullYear()}} Het Echte Werkt! | Leiderschapsontwikkeling
          </p>
        </div>
      </div>
    </div>
  </div>

</div>

</div>
</template>
<style lang="scss">
#dagevosFooter {

  .hetwerkticon{
    position: relative;
  }



    *{
      color:  #552e87;
    }
    a {
        text-decoration: none;
        color: inherit !important;
    }

}
</style>
