/* eslint-disable */

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  // if (process.env.NODE_ENV !== 'production') return
  /*
  ** Every time the route changes (fired on initialization too)
  */
  // app.router.afterEach((to, from) => {
  //   /*
  //   ** We tell Google Analytic to add a page view
  //   */
  //   console.log('router ran')
  //   console.log(to.hash)
  //   // if(to.hash){
  //   //
  //   //   var id = to.hash.substr(1)
  //   //   setTimeout(function(){
  //   //     window.scrollTo(0,document.getElementById(id).offsetTop)
  //   //   },250)
  //   // }
  // })
  
  // app.router.beforeEach((to, from) => {
    /*
    ** We tell Google Analytic to add a page view
    */
    // console.log('hey')
  // })
}
