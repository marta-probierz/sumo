import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private httpService: HttpClient) {}

  getBlogPosts(): Observable<any[]> {
    return this.httpService.get<any>('../../assets/data/blog.json');
  }
}
