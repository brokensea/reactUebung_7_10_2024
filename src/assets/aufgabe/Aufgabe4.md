# To Do Liste

# ✅ Aufgabenstellung

Erstelle eine einfache, benutzerfreundliche To-Do-Liste mit React. Die Anwendung soll es den Nutzern ermöglichen, Aufgaben hinzuzufügen, ggf. zu löschen (Bonus) und eine Übersicht über ihre To-Do-Elemente zu behalten.

1. **Komponentenstruktur:**
   - Erstelle zwei React-Komponenten:
     - `TodoList`: Diese Komponente ist die Hauptkomponente, die die gesamte To-Do-Liste verwaltet.
     - `Todo`: Diese Komponente repräsentiert eine einzelne Aufgabe in der Liste und enthält die Logik zum Löschen der Aufgabe.
2. **Zustandsverwaltung:**
   - Verwende den `useState`Hook, um den Zustand der To-Do-Liste zu verwalten. Die Liste sollte ein Array von Objekten enthalten, wobei jedes Objekt eine Aufgabe darstellt.
   - Jedes To-Do-Objekt sollte mindestens folgende Eigenschaften besitzen:
     - `id`: Eindeutige Identifikationsnummer für die Aufgabe
     - `text`: Der Text der Aufgabe
3. **Funktionen:**
   - Implementiere die folgenden Funktionen:
     - **Aufgabe hinzufügen:** Der Nutzer soll in der Lage sein, eine neue Aufgabe über ein Eingabefeld und einen Button hinzuzufügen. Wenn der Button geklickt wird, sollte die neue Aufgabe zur To-Do-Liste hinzugefügt werden.
     - **Bonus → Aufgabe löschen:** Neben jeder Aufgabe sollte ein Lösch-Button vorhanden sein. Wenn der Nutzer auf diesen Button klickt, sollte die entsprechende Aufgabe aus der Liste entfernt werden.
     - **Aufgabenanzeige:** Die To-Do-Liste sollte alle hinzugefügten Aufgaben übersichtlich anzeigen. Jede Aufgabe sollte ihren Text und ggf. einen Lösch-Button enthalten

### Impression:
