import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './timeses/timeses.component.html',
  styleUrls: ['./timeses/timeses.component.css'],
  template: `   <div class="card">
  <img [src]="laptop.imageUrl" class="card-img-top" alt="Laptop Image">
  <div class="card-body">
    <h5 class="card-title">{{ laptop.name }}</h5>
    <p class="card-text">{{ laptop.description }}</p>
  </div>
</div>`
})
export class AppComponent {
  laptops: any[] = [
    { 
      name: 'Laptop 1',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 2',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 3',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 4',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 5',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 6',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 7',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 8',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 9',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 10',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 11',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 12',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 13',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 14',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 15',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 16',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 17',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
    { 
      name: 'Laptop 18',
      description: 'Description of Laptop 1',
      imageUrl: 'path/to/image1.jpg'
    },
  ]
}
