import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-file-input',
	templateUrl: './file-input.component.html',
	styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent {
	@Output() fileChange: EventEmitter<File | null> = new EventEmitter();
	@Input() imageUrl: string | null = null;

	public onFileInputChange(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		this.emitFile((inputElement.files as FileList)[0] || null);
	}

	public onFileDrop(event: DragEvent): void {
		event.preventDefault();
		this.emitFile(event.dataTransfer?.files[0] || null);
	}

	public onDragOver(event: DragEvent): void {
		event.preventDefault();
	}

	private emitFile(file: File | null): void {
		this.fileChange.emit(file);
	}
}
