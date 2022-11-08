import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void 
  {
  }

  onSubmit(form: NgForm) 
  {
    // route qui navigue jusqu'à la search page, et on extrait du form la valeur qu'on écrit
    this.router.navigate(['search', form.value.search]);
  }

}
