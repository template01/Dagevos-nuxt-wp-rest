<template>
<div id="dagevosFooter" class="container px-5 pt-mobile greyBackground">
  <div v-if="$route.path !='/contact'" class="row justify-content-md-center">
    <div class=" col-md-9 mb-1">
      <hr>
    </div>
  </div>

  <!--  STANDARD FOOTER -->
  <div v-if="$route.path !='/contact'" class="row">

    <div class="col-sm-5">
      <div class="py-5 pl-4 ignorepaddingSmall">
        <div class="">
          <p class="smallText">
            Wil je meer weten of gewoon vrijblijvend in gesprek?
            <br />
            <i class="fa-fw fa fa-phone" aria-hidden="true"></i> Bel me op telefoonnummer <a style="text-decoration:none" href="tel:06 51 24 18 61">06 – 51 24 18 61</a>
            <br />

            <i class="fa-fw fa fa-envelope-o" aria-hidden="true"></i> Mail me via <a style="text-decoration:none" href="mailto:rene@hetechtewerkt.nl"> <span class=""> rene@hetechtewerkt.nl</span></a>
            <br />
            <i class="fa-fw fa fa-coffee" aria-hidden="true"></i> Of beter nog: kom een goeie kop koffie of thee drinken in Rotterdam.
          </p>
        </div>
      </div>

    </div>
    <div class="col-sm-2 hidden-sm-down">
      <div style="display:grid" class="py-5 px-4 ignorepaddingSmall">

        <img width="48px" style="margin:0 auto; display:inline-block; padding-top:40px" src="/faviconsm.svg" />
      </div>
    </div>

    <div class="col-sm-5">
      <div class="py-5 pr-4 ignorepaddingSmall">
        <div class="">
          <p class="smallText">
            Bezoekadres/kantoor:
            <!-- <span class="hetwerkticon"><img  src="/faviconsm.svg" /></span> Het Echte Werkt! | Leiderschapsontwikkeling -->
            <br />
            <a style="text-decoration:none" href="https://goo.gl/maps/WavUb5WFYVL2" target="_blank">De Fabriek van Delfshaven<br /> Mathenesserdijk 416-J<br /> 3026 GV Rotterdam</a>
            <br /> Het Echte Werkt! | Leiderschapsontwikkeling
            <br />
            <i class="fa-fw fa fa-copyright" aria-hidden="true"></i> {{(new Date()).getFullYear()}}
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
    <div class="col-sm-12">
      <div class="p-5">
        <div class="">
          <p class="smallText text-center">
            Bedankt voor je bezoek aan mijn website en tot ziens in de Echte wereld!
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

    @media (max-width: 991px) {
        .ignorepaddingSmall {
            padding-left:  0.5rem!important;
            padding-right:  0.5rem!important;
        }
    }

    .hetwerkticon {
        position: relative;
    }

    * {
        color: #552e87;
    }
    a {
        text-decoration: none;
        color: inherit !important;
    }

}
</style>
