## Работа с ветками (RU)

Для эффективного управления разработкой проекта **CliperClient** используется следующая стратегия работы с ветками.

### Основные ветки

- **`main`**  
  Основная ветка, которая всегда содержит стабильный и готовый к выпуску код.  
  Не допускается прямое внесение изменений в эту ветку. Все изменения попадают сюда через Pull Request из других веток.

- **`develop`**  
  Ветка текущей разработки. Все изменения и новые функции сначала мержатся сюда.  
  После стабилизации изменений они попадают в ветку `main`.

### Временные ветки

- **`feature/*`**  
  Ветки, которые используются для разработки новых функций.  
  Создаются от `develop` и после завершения задачи мержатся обратно в `develop`.  
  **Пример:**
  ```bash
  git checkout -b feature/[feature_name]
  ```

- **`bugfix/*`**  
  Ветки для исправления багов в процессе разработки.  
  Создаются от `develop` и после выполнения задачи мержатся туда же.  
  **Пример:**
  ```bash
  git checkout -b bugfix/[bugfix_name]
  ```

- **`release/*`**  
  Создаются, чтобы подготовить новый релиз на основе ветки `develop`.  
  Используются для финального тестирования и исправления мелких ошибок перед мержем в `main`.  
  После завершения изменения из релизной ветки мержатся в `main` и `develop`.  
  **Пример:**
  ```bash
  git checkout -b release/[release_version (v1.0.0)]
  ```

- **`hotfix/*`**  
  Используются для срочных исправлений в продуктивной ветке `main`.  
  После завершения работы изменения мержатся в `main` и `develop`.  
  **Пример:**
  ```bash
  git checkout -b hotfix/[hotfix_name]
  ```

---

## Branch Workflow (EN)

To effectively manage the development of the **CliperClient** project, the following branching strategy is used.

### Main Branches

- **`main`**  
  The primary branch that always contains stable, production-ready code.  
  No direct changes are allowed in this branch. All changes are merged here via Pull Requests from other branches.

- **`develop`**  
  The branch for current development.  
  All changes and new features are first merged here. Once stabilized, they are merged into the `main` branch.

### Temporary Branches

- **`feature/*`**  
  Branches used for developing new features.  
  They are created from `develop` and merged back into `develop` upon task completion.  
  **Example:**
  ```bash
  git checkout -b feature/[feature_name]
  ```

- **`bugfix/*`**  
  Branches used for fixing bugs during development.  
  They are created from `develop` and merged back into it when completed.  
  **Example:**
  ```bash
  git checkout -b bugfix/[bugfix_name]
  ```

- **`release/*`**  
  Created to prepare a new release based on the `develop` branch.  
  These branches are used for final testing and bug fixes before merging into `main`.  
  After completion, changes are merged into both `main` and `develop` branches.  
  **Example:**
  ```bash
  git checkout -b release/[release_version (v1.0.0)]
  ```

- **`hotfix/*`**  
  Used for urgent fixes in the `main` production branch.  
  Once complete, changes are merged into both `main` and `develop`.  
  **Example:**
  ```bash
  git checkout -b hotfix/[hotfix_name]
  ```

---

Эта структура веток обеспечивает порядок в процессе разработки и облегчает работу с большим количеством задач и
контрибьюторов как для русскоязычных, так и для англоязычных участников.

Если у вас остались вопросы или нужно добавить дополнительную информацию в описание, дайте знать! 😊