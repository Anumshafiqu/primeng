import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/node.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.css'
})
export class TreeTableComponent {
  files!: TreeNode[];
  cols!: Column[];
  constructor(private nodeService: NodeService) {}

  ngOnInit() {
      this.nodeService.getFilesystem().then((files) => (this.files = files));
      this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' },
        { field: '', header: '' }
    ];
  }

  toggleApplications() {
    if (this.files && this.files.length > 0) {
        const newFiles = [...this.files];
        newFiles[0] = { ...newFiles[0], expanded: !newFiles[0].expanded };
        this.files = newFiles;
    }
}
}
