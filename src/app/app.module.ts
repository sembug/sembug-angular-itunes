import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistVideoListComponent } from './artist-video-list/artist-video-list.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistMusicListComponent } from './artist-music-list/artist-music-list.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "find", redirectTo: "search" },
  { path: "search", component: SearchComponent },
  {
    path: "artist/:artistId",
    component: ArtistComponent,
    // children: [
    //   { path: "", redirectTo: "tracks", pathMatch: "full" },
    //   { path: "tracks", component: ArtistTrackListComponent },
    //   { path: "albums", component: ArtistAlbumListComponent },
    //   { path: "videos", component: ArtistVideoListComponent }
    // ]
  },
  { path: "**", component: HomeComponent }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, SearchComponent, HeaderComponent, ArtistTrackListComponent, ArtistAlbumListComponent, ArtistVideoListComponent, ArtistComponent, ArtistMusicListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
