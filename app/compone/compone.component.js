"use strict";
const compOne = {
  template: `
  <section class="formWrapper">
    <form ng-submit="$ctrl.makeProfile($ctrl.userProfile);">
      <h4>Use the form below to update the profile!</h4>
      <h3>Name</h3>
      <input type="text"  ng-model="$ctrl.userProfile.name">
      <h3>Contact</h3>
      <input type="text"  ng-model="$ctrl.userProfile.contact">
      <h3>Bio</h3>
      <textarea cols="30"  rows="10" ng-model="$ctrl.userProfile.bio"></textarea>
      <button>Update</button>
    </form>
  </section>
  `, 
  //to use a service it must be injected  
  controller: ["ProfileService", 
    function(ProfileService){
    const vm = this;

    vm.makeProfile = function(userProfile){
      ProfileService.setUserProfile(userProfile);
    }
    vm.$onInit = function(){
      vm.userProfile = ProfileService.getUserProfile();
    };
	
  }]
};

//component controllers should only be used to get data and set data. nothing more.


angular.module("ProfileApp").component("compOne", compOne)