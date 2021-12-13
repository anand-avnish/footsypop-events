import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {

  weddingItems: GalleryItem[] = [];
  birthdayItems: GalleryItem[] = [];
  corporateItems: GalleryItem[] = [];
  societalItems: GalleryItem[] = [];

  weddingData = data1;
  birthdayData = data2;
  corporateData = data3;
  societalData = data4;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {

    /** Basic Gallery Example */

    // Create gallery items
    this.weddingItems = this.weddingData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    this.birthdayItems = this.birthdayData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    this.corporateItems = this.corporateData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    this.societalItems = this.societalData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));

    /** Lightbox Example */
    // Get a lightbox gallery ref
    const weddingRef = this.gallery.ref('weddingRef');

    weddingRef.load(this.weddingItems);
    // Add custom gallery config to the lightbox (optional)
    weddingRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    const birthdayRef = this.gallery.ref('birthdayRef');

    birthdayRef.load(this.birthdayItems);
    // Add custom gallery config to the lightbox (optional)
    birthdayRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top
    });

    const corporateRef = this.gallery.ref('corporateRef');

    corporateRef.load(this.corporateItems);
    // Add custom gallery config to the lightbox (optional)
    corporateRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top
    });

    const societalRef = this.gallery.ref('societalRef');

    societalRef.load(this.societalItems);
    // Add custom gallery config to the lightbox (optional)
    societalRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top
    });
  }
}

const data1 = [
  {
    srcUrl: '../../../assets/1 (1).jpeg',
    previewUrl: '../../../assets/1 (1).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (2).jpeg',
    previewUrl: '../../../assets/1 (2).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (3).jpeg',
    previewUrl: '../../../assets/1 (3).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (4).jpeg',
    previewUrl: '../../../assets/1 (4).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (5).jpeg',
    previewUrl: '../../../assets/1 (5).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (6).jpeg',
    previewUrl: '../../../assets/1 (6).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (1).jpeg',
    previewUrl: '../../../assets/1 (1).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (15).jpeg',
    previewUrl: '../../../assets/1 (15).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (16).jpeg',
    previewUrl: '../../../assets/1 (16).jpeg'
  },


];

const data2 = [
  {
    srcUrl: '../../../assets/1 (8).jpeg',
    previewUrl: '../../../assets/1 (8).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (9).jpeg',
    previewUrl: '../../../assets/1 (9).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (10).jpeg',
    previewUrl: '../../../assets/1 (10).jpeg'
  },

];

const data3 = [
  {
    srcUrl: '../../../assets/1 (7).jpeg',
    previewUrl: '../../../assets/1 (7).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (12).jpeg',
    previewUrl: '../../../assets/1 (12).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (13).jpeg',
    previewUrl: '../../../assets/1 (13).jpeg'
  },
  {
    srcUrl: '../../../assets/1 (14).jpeg',
    previewUrl: '../../../assets/1 (14).jpeg'
  },
];

const data4 = [
  {
    srcUrl: '../../../assets/1 (1).jpeg',
    previewUrl: '../../../assets/1 (1).jpeg'
  },

  {
    srcUrl: '../../../assets/1 (11).jpeg',
    previewUrl: '../../../assets/1 (11).jpeg'
  },
];
