"use strict";

function ProfileService($location) {
  const self = this;
  self.userProfile = {
    name: "Shrek",
    contact: "@ My Swamp!",
    bio: "Well the years start coming and they don't stop coming Fed to the rules and I hit the ground running Didn't make sense not to live for fun Your brain gets smart but your head gets dumb So much to do, so much to see So what's wrong with taking the back streets? You'll never know if you don't go You'll never shine if you don't glow"
  }
  self.getUserProfile  = function() {
    return self.userProfile;
  };
  self.setUserProfile = function(userProfile) {
    self.userProfile = userProfile;
    $location.path("/profile");
    console.log(userProfile);
  };
  self.editProfile = function() {
    $location.path("/editProfile")
  }
}

angular
  .module("ProfileApp")
  .service("ProfileService", ProfileService)