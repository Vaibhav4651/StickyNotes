const addNoteBtn = document.getElementById('addNoteBtn');
        const notesContainer = document.getElementById('newNotes');

        function createNote() {
            const note = document.createElement('div');
            note.classList.add('note');

            const textarea = document.createElement('textarea');
            textarea.placeholder = 'Type a new note...';

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'X';
            deleteBtn.style.cssText = "background-color:lightred;color:black;"
            
            note.appendChild(textarea);
            note.appendChild(deleteBtn);

            notesContainer.appendChild(note);

            deleteBtn.addEventListener('click', () => {
                note.remove();
            });
        }

        addNoteBtn.addEventListener('click', createNote);
