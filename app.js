var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");


var    D2  = require("./Data/D2.json"),
      D3  = require("./Data/D3.json"),
      D4  = require("./Data/D4.json"),
      D5  = require("./Data/D5.json"),
      D6  = require("./Data/D6.json"),
      D7  = require("./Data/D7.json"),
      D8  = require("./Data/D8.json"),
      D9  = require("./Data/D9.json"),
      D10  = require("./Data/D10.json"),
      Detail  = require("./Data/Detail.json");




app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));






app.get("/", function(req, res){

  res.render("index");

});
app.get("/about", function(req, res){

  res.render("about");

});



app.get("/cutoff", function(req, res){
    // Get all campgrounds from DB
    if (req.query.search && req.query.cat) {
      const search = req.query.search + 1 ;
      const cat = req.query.cat;
      console.log(search);
      var    D2  = require("./Data/D2.json"),
            D3  = require("./Data/D3.json"),
            D4  = require("./Data/D4.json"),
            D5  = require("./Data/D5.json"),
            D6  = require("./Data/D6.json"),
            D7  = require("./Data/D7.json"),
            D8  = require("./Data/D8.json"),
            D9  = require("./Data/D9.json"),
            D10  = require("./Data/D10.json"),
            Detail  = require("./Data/Detail.json");

      const regex = new RegExp(escapeRegex(req.query.search), 'gi');
       if (cat == "Km") {

         var allDetail = [];
         var allD2 = [];
         var allD3 = [];
         var allD4 = [];
         var allD5 = [];
         var allD6 = [];
         var allD7 = [];
         var allD8 = [];
         var allD9 = [];
         var allD10 = [];

        Detail.forEach(function(Detail) {

          if (Detail.Km <= search){

               allDetail.push(Detail);
                      }
                    return allDetail;
                  })

                    D2.forEach(function(D2) {
                   if (D2.Km <= search){

                     allD2.push(D2);
                               }

                               return allD2;
                           })
                             D3.forEach(function(D3) {
                            if (D3.Km <= search){
                              allD3.push(D3);
                                        }
                                        return allD3;
                                    })
                                    D4.forEach(function(D4) {
                                     if (D4.Km <= search){
                                       allD4.push(D4);
                                                 }
                                                 return allD4;
                                             })
                                              D5.forEach(function(D5) {
                                              if (D5.Km <= search){
                                                allD5.push(D5);
                                                          }
                                                          return allD5;
                                                      })
                                                      D6.forEach(function(D6) {
                                                       if (D6.Km <= search){
                                                         allD6.push(D6);
                                                                   }
                                                                   return allD6;
                                                               })
                                                                 D7.forEach(function(D7) {
                                                                if (D7.Km <= search){
                                                                  allD7.push(D7);
                                                                            }
                                                                            return allD7;
                                                                        })
                                                                          D8.forEach(function(D8) {
                                                                         if (D8.Km <= search){
                                                                           allD8.push(D8);
                                                                                     }
                                                                                     return allD8;
                                                                                 })
                                                                                   D9.forEach(function(D9) {
                                                                                  if (D9.Km <= search){
                                                                                    allD9.push(D9);
                                                                                              }
                                                                                              return allD9;
                                                                                          })
                                                                                          D10.forEach(function(D10) {
                                                                                           if (D10.Km <= search){
                                                                                            allD10.push(D10);
                                                                                                       }
                                                                                                       return allD10;
                                                                                                   })
                                            res.render("index2",{detail:allDetail,d2:allD2,d3:allD3,d4:allD4,d5:allD5,d6:allD6,d7:allD7,d8:allD8,d9:allD9,d10:allD10});
                                     }
       if(cat == "Obc"){

         var allDetail = [];
         var allD2 = [];
         var allD3 = [];
         var allD4 = [];
         var allD5 = [];
         var allD6 = [];
         var allD7 = [];
         var allD8 = [];
         var allD9 = [];
         var allD10 = [];

        Detail.forEach(function(Detail) {

          if (Detail.Obc <= search){

               allDetail.push(Detail);
                      }
                    return allDetail;
                  })

                    D2.forEach(function(D2) {
                   if (D2.Obc <= search){

                     allD2.push(D2);
                               }

                               return allD2;
                           })
                             D3.forEach(function(D3) {
                            if (D3.Obc <= search){
                              allD3.push(D3);
                                        }
                                        return allD3;
                                    })
                                    D4.forEach(function(D4) {
                                     if (D4.Obc <= search){
                                       allD4.push(D4);
                                                 }
                                                 return allD4;
                                             })
                                              D5.forEach(function(D5) {
                                              if (D5.Obc <= search){
                                                allD5.push(D5);
                                                          }
                                                          return allD5;
                                                      })
                                                      D6.forEach(function(D6) {
                                                       if (D6.Obc <= search){
                                                         allD6.push(D6);
                                                                   }
                                                                   return allD6;
                                                               })
                                                                 D7.forEach(function(D7) {
                                                                if (D7.Obc <= search){
                                                                  allD7.push(D7);
                                                                            }
                                                                            return allD7;
                                                                        })
                                                                          D8.forEach(function(D8) {
                                                                         if (D8.Obc <= search){
                                                                           allD8.push(D8);
                                                                                     }
                                                                                     return allD8;
                                                                                 })
                                                                                   D9.forEach(function(D9) {
                                                                                  if (D9.Obc <= search){
                                                                                    allD9.push(D9);
                                                                                              }
                                                                                              return allD9;
                                                                                          })
                                                                                          D10.forEach(function(D10) {
                                                                                           if (D10.Obc <= search){
                                                                                            allD10.push(D10);
                                                                                                       }
                                                                                                       return allD10;
                                                                                                   })
                                            res.render("index2",{detail:allDetail,d2:allD2,d3:allD3,d4:allD4,d5:allD5,d6:allD6,d7:allD7,d8:allD8,d9:allD9,d10:allD10});
                                     }


       if (cat == "Sc") {

         var allDetail = [];
         var allD2 = [];
         var allD3 = [];
         var allD4 = [];
         var allD5 = [];
         var allD6 = [];
         var allD7 = [];
         var allD8 = [];
         var allD9 = [];
         var allD10 = [];

        Detail.forEach(function(Detail) {

          if (Detail.Sc <= search){

               allDetail.push(Detail);
                      }
                    return allDetail;
                  })

                    D2.forEach(function(D2) {
                   if (D2.Sc <= search){

                     allD2.push(D2);
                               }

                               return allD2;
                           })
                             D3.forEach(function(D3) {
                            if (D3.Sc <= search){
                              allD3.push(D3);
                                        }
                                        return allD3;
                                    })
                                    D4.forEach(function(D4) {
                                     if (D4.Sc <= search){
                                       allD4.push(D4);
                                                 }
                                                 return allD4;
                                             })
                                              D5.forEach(function(D5) {
                                              if (D5.Sc <= search){
                                                allD5.push(D5);
                                                          }
                                                          return allD5;
                                                      })
                                                      D6.forEach(function(D6) {
                                                       if (D6.Sc <= search){
                                                         allD6.push(D6);
                                                                   }
                                                                   return allD6;
                                                               })
                                                                 D7.forEach(function(D7) {
                                                                if (D7.Sc <= search){
                                                                  allD7.push(D7);
                                                                            }
                                                                            return allD7;
                                                                        })
                                                                          D8.forEach(function(D8) {
                                                                         if (D8.Sc <= search){
                                                                           allD8.push(D8);
                                                                                     }
                                                                                     return allD8;
                                                                                 })
                                                                                   D9.forEach(function(D9) {
                                                                                  if (D9.Sc <= search){
                                                                                    allD9.push(D9);
                                                                                              }
                                                                                              return allD9;
                                                                                          })
                                                                                          D10.forEach(function(D10) {
                                                                                           if (D10.Sc <= search){
                                                                                            allD10.push(D10);
                                                                                                       }
                                                                                                       return allD10;
                                                                                                   })
                                            res.render("index2",{detail:allDetail,d2:allD2,d3:allD3,d4:allD4,d5:allD5,d6:allD6,d7:allD7,d8:allD8,d9:allD9,d10:allD10});
                                     }
       if(cat == "St"){

         var allDetail = [];
         var allD2 = [];
         var allD3 = [];
         var allD4 = [];
         var allD5 = [];
         var allD6 = [];
         var allD7 = [];
         var allD8 = [];
         var allD9 = [];
         var allD10 = [];

        Detail.forEach(function(Detail) {

          if (Detail.St <= search){

               allDetail.push(Detail);
                      }
                    return allDetail;
                  })

                    D2.forEach(function(D2) {
                   if (D2.St <= search){

                     allD2.push(D2);
                               }

                               return allD2;
                           })
                             D3.forEach(function(D3) {
                            if (D3.St <= search){
                              allD3.push(D3);
                                        }
                                        return allD3;
                                    })
                                    D4.forEach(function(D4) {
                                     if (D4.St <= search){
                                       allD4.push(D4);
                                                 }
                                                 return allD4;
                                             })
                                              D5.forEach(function(D5) {
                                              if (D5.St <= search){
                                                allD5.push(D5);
                                                          }
                                                          return allD5;
                                                      })
                                                      D6.forEach(function(D6) {
                                                       if (D6.St <= search){
                                                         allD6.push(D6);
                                                                   }
                                                                   return allD6;
                                                               })
                                                                 D7.forEach(function(D7) {
                                                                if (D7.St <= search){
                                                                  allD7.push(D7);
                                                                            }
                                                                            return allD7;
                                                                        })
                                                                          D8.forEach(function(D8) {
                                                                         if (D8.St <= search){
                                                                           allD8.push(D8);
                                                                                     }
                                                                                     return allD8;
                                                                                 })
                                                                                   D9.forEach(function(D9) {
                                                                                  if (D9.St <= search){
                                                                                    allD9.push(D9);
                                                                                              }
                                                                                              return allD9;
                                                                                          })
                                                                                          D10.forEach(function(D10) {
                                                                                           if (D10.St <= search){
                                                                                            allD10.push(D10);
                                                                                                       }
                                                                                                       return allD10;
                                                                                                   })
                                            res.render("index2",{detail:allDetail,d2:allD2,d3:allD3,d4:allD4,d5:allD5,d6:allD6,d7:allD7,d8:allD8,d9:allD9,d10:allD10});
                                     }
       if(cat == "Pwd"){

         var allDetail = [];
         var allD2 = [];
         var allD3 = [];
         var allD4 = [];
         var allD5 = [];
         var allD6 = [];
         var allD7 = [];
         var allD8 = [];
         var allD9 = [];
         var allD10 = [];

        Detail.forEach(function(Detail) {

          if (Detail.Pwd <= search){

               allDetail.push(Detail);
                      }
                    return allDetail;
                  })

                    D2.forEach(function(D2) {
                   if (D2.Pwd <= search){

                     allD2.push(D2);
                               }

                               return allD2;
                           })
                             D3.forEach(function(D3) {
                            if (D3.Pwd <= search){
                              allD3.push(D3);
                                        }
                                        return allD3;
                                    })
                                    D4.forEach(function(D4) {
                                     if (D4.Pwd <= search){
                                       allD4.push(D4);
                                                 }
                                                 return allD4;
                                             })
                                              D5.forEach(function(D5) {
                                              if (D5.Pwd <= search){
                                                allD5.push(D5);
                                                          }
                                                          return allD5;
                                                      })
                                                      D6.forEach(function(D6) {
                                                       if (D6.Pwd <= search){
                                                         allD6.push(D6);
                                                                   }
                                                                   return allD6;
                                                               })
                                                                 D7.forEach(function(D7) {
                                                                if (D7.Pwd <= search){
                                                                  allD7.push(D7);
                                                                            }
                                                                            return allD7;
                                                                        })
                                                                          D8.forEach(function(D8) {
                                                                         if (D8.Pwd <= search){
                                                                           allD8.push(D8);
                                                                                     }
                                                                                     return allD8;
                                                                                 })
                                                                                   D9.forEach(function(D9) {
                                                                                  if (D9.Pwd <= search){
                                                                                    allD9.push(D9);
                                                                                              }
                                                                                              return allD9;
                                                                                          })
                                                                                          D10.forEach(function(D10) {
                                                                                           if (D10.Pwd <= search){
                                                                                            allD10.push(D10);
                                                                                                       }
                                                                                                       return allD10;
                                                                                                   })
                                            res.render("index2",{detail:allDetail,d2:allD2,d3:allD3,d4:allD4,d5:allD5,d6:allD6,d7:allD7,d8:allD8,d9:allD9,d10:allD10});
                                     }
       if(cat == "Unreserved"){

         var allDetail = [];
         var allD2 = [];
         var allD3 = [];
         var allD4 = [];
         var allD5 = [];
         var allD6 = [];
         var allD7 = [];
         var allD8 = [];
         var allD9 = [];
         var allD10 = [];

        Detail.forEach(function(Detail) {

          if (Detail.Unreserved <= search){

               allDetail.push(Detail);
                      }
                    return allDetail;
                  })

                    D2.forEach(function(D2) {
                   if (D2.Unreserved <= search){

                     allD2.push(D2);
                               }

                               return allD2;
                           })
                             D3.forEach(function(D3) {
                            if (D3.Unreserved <= search){
                              allD3.push(D3);
                                        }
                                        return allD3;
                                    })
                                    D4.forEach(function(D4) {
                                     if (D4.Unreserved <= search){
                                       allD4.push(D4);
                                                 }
                                                 return allD4;
                                             })
                                              D5.forEach(function(D5) {
                                              if (D5.Unreserved <= search){
                                                allD5.push(D5);
                                                          }
                                                          return allD5;
                                                      })
                                                      D6.forEach(function(D6) {
                                                       if (D6.Unreserved <= search){
                                                         allD6.push(D6);
                                                                   }
                                                                   return allD6;
                                                               })
                                                                 D7.forEach(function(D7) {
                                                                if (D7.Unreserved <= search){
                                                                  allD7.push(D7);
                                                                            }
                                                                            return allD7;
                                                                        })
                                                                          D8.forEach(function(D8) {
                                                                         if (D8.Unreserved <= search){
                                                                           allD8.push(D8);
                                                                                     }
                                                                                     return allD8;
                                                                                 })
                                                                                   D9.forEach(function(D9) {
                                                                                  if (D9.Unreserved <= search){
                                                                                    allD9.push(D9);
                                                                                              }
                                                                                              return allD9;
                                                                                          })
                                                                                          D10.forEach(function(D10) {
                                                                                           if (D10.Unreserved <= search){
                                                                                            allD10.push(D10);
                                                                                                       }
                                                                                                       return allD10;
                                                                                                   })
                                            res.render("index2",{detail:allDetail,d2:allD2,d3:allD3,d4:allD4,d5:allD5,d6:allD6,d7:allD7,d8:allD8,d9:allD9,d10:allD10});
                                     }

    }
    else {
      res.redirect("/");
    }
  });


function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

app.listen(process.env.PORT || 5000,function() {
  console.log("duCutoffs server started!!")
});
