$(document).ready(function(){$('.localLnk').on('click',function(e){var caller=$(this).attr('href'),destination=$(caller).offset().top;$("html:not(:animated),body:not(:animated)").animate({scrollTop:destination},800);e.preventDefault()});jQuery.fn.spectragram.accessData={accessToken:'2136707.12e2743.9576ae17af4e4ad4aebf6b72433c01fd',clientID:'12e27430fe054c72839c5f16f86177e1'}});