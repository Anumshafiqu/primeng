import { Component } from '@angular/core';

@Component({
  selector: 'app-metergroup',
  templateUrl: './metergroup.component.html',
  styleUrl: './metergroup.component.css'
})
export class MetergroupComponent {
  value = [
    { label: 'Space used', value: 15, color: '#34d399' }
];
values = [
  { label: 'Apps', color: '#34d399', value: 16 },
  { label: 'Messages', color: '#fbbf24', value: 8 },
  { label: 'Media', color: '#60a5fa', value: 24 },
  { label: 'System', color: '#c084fc', value: 10 }
];
value1 = [
  { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
  { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
  { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
  { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
];
value2 = [
  { label: 'Apps', color: '#34d399', value: 16 },
  { label: 'Messages', color: '#fbbf24', value: 8 },
  { label: 'Media', color: '#60a5fa', value: 24 },
  { label: 'System', color: '#c084fc', value: 10 }
];
value3 = [
  { label: 'Apps', color: '#34d399', value: 16 },
  { label: 'Messages', color: '#fbbf24', value: 8 },
  { label: 'Media', color: '#60a5fa', value: 24 },
  { label: 'System', color: '#c084fc', value: 10 }
];
value4 = [
  { label: 'Apps', color: '#34d399', value: 16 },
  { label: 'Messages', color: '#fbbf24', value: 8 },
  { label: 'Media', color: '#60a5fa', value: 24 },
  { label: 'System', color: '#c084fc', value: 10 }
];
value5 = [
  { label: 'Apps',  color1: '#fbbf24', value: 25, icon: 'pi pi-table' },
  { label: 'Messages',color1: '#fbbf24', value: 15, icon: 'pi pi-inbox' },
  { label: 'Media',color1: '#fbbf24', value: 20, icon: 'pi pi-image' },
  { label: 'System',color1: '#fbbf24', color2: '#fbbf24', value: 10, icon: 'pi pi-cog' }
];
}
