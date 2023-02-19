import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  ratedvalue=0;
  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }

  ];

  constructor() {}

  selectStar(value:any): void{
    if ( this.selectedRating === 0 ||  this.selectedRating === 1 ||  this.selectedRating === 2 
      ||  this.selectedRating === 3 ||  this.selectedRating === 5){
      this.stars.filter( (star) => {
        if ( star.id <= value){
          star.class = 'star-gold star';
        }
        else{
          star.class = 'star-gray star';
        }
        return star;
      });
      this.ratedvalue=value;
    }
    this.selectedRating = value;
  }

  ngOnInit(): void {
  }

}