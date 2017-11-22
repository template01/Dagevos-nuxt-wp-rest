<template>
<div id="dagevosFooter" class="container px-5 pt-mobile greyBackground">
    <div v-if="$route.path !='/contact'" class="row justify-content-md-center">
      <div class=" col-md-9 mb-1">
        <hr>
      </div>
    </div>

  <div class="row">
    <div class="col-sm-6">
      <div class=" py-5 px-4">
        <div class="">

          <p class="smallText">

            Wil je meer weten en/of vrijblijvend in gesprek gaan?
            <br />
            <br />
            Bel me op telefoonnummer <a style="text-decoration:none" href="tel:06 51 24 18 61"><i class="fa fa-phone" aria-hidden="true"></i> 06 – 51 24 18 61</a> of mail me via <a style="text-decoration:none" href="mailto:rene@hetechtewerkt.nl"> <i class="fa fa-envelope-o" aria-hidden="true"></i> <span class=""> rene@hetechtewerkt.nl</span></a>
            <br />
            <br />
            Of beter nog: kom een goeie kop koffie drinken in Rotterdam.

            <!-- <a style="text-decoration:none" href="tel:06 51 24 18 61"><i class="fa fa-phone pr-2" aria-hidden="true"></i>06 51 24 18 61</a>
            <br />
            <a style="text-decoration:none" href="mailto:rene@hetechtewerkt.nl"><i class="fa fa-envelope-o" aria-hidden="true" style="position:absolute; margin-top:4px; "></i> <span class="pl-4">rene@hetechtewerkt.nl</span></a>

            <br />
            <a style="text-decoration:none" href="https://www.linkedin.com/in/renedagevos/"><i class="fa fa-linkedin" aria-hidden="true" style="position:absolute; margin-top:4px; "></i> <span class="pl-4">renedagevos</span></a>
            <br /><i class="fa fa-heart-o" aria-hidden="true" style="position:absolute; margin-top:4px; "></i> <span class="pl-4"> Website door
            <a href="http://www.template01.info">Template Studio</a> en <a href="http://pumphouse.nl/">The Pumphouse</a></span> -->
          </p>
          <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
        </div>
      </div>

    </div>

    <div class="col-sm-6">
      <div class="p-5">
        <div class="">
          <p class="smallText">
            Het Echte Werkt! | Leiderschapsontwikkeling
            <br />
            <br />
            De Fabriek van Delfshaven<br /> Mathenesserdijk 416-J<br /> 3026 GV Rotterdam
            <br />
            <br />
            <i class="fa fa-copyright" aria-hidden="true"></i> 2017 Het Echte Werkt! | Leiderschapsontwikkeling
          </p>
          <!-- <nuxt-link to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
        </div>
      </div>

    </div>
  </div>
</div>

</div>
</template>
<style lang="scss">
#dagevosFooter {
    *{
      color:  #552e87;
    }
    a {
        text-decoration: none;
        color: inherit !important;
    }

}
</style>
