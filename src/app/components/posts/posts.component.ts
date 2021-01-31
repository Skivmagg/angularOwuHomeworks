import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  posts: Post[];
  id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value =>  this.posts = value.postsData);
    this.activatedRoute.params.subscribe(value => this.id = value.id);
  }

  ngOnInit(): void {
  }

}

