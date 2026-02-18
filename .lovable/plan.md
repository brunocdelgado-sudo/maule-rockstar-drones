

## Plano: Ajustes de Texto e Renomeação de Cursos

### Alterações

---

### 1. `src/components/About.tsx` -- Atualizar estatística

- Linha 6: Trocar `"500+"` por `"2000+"`

---

### 2. `src/components/Courses.tsx` -- Atualizar texto de turmas

- Linha 33: Trocar `"Turmas de 4-8 alunos"` por `"Turmas de 4 a 6 alunos"`

---

### 3. `src/data/coursesData.ts` -- Múltiplas alterações

| Local | De | Para |
|-------|-----|------|
| Linha 47 | `"Operações Intermediário"` | `"Pilotagem Intermediária"` |
| Linha 52 | `"Turmas 4-8 alunos"` | `"Turmas 4-6 alunos"` |
| Linha 99 | `"(4-8 alunos)"` | `"(4 a 6 alunos)"` |
| Linha 101 | `"8.000 alunos"` | `"2.000 alunos"` |
| Linha 109 | `"Operações Profissional"` | `"Pilotagem Profissional"` |
| Linha 114 | `"Turmas 4-8 alunos"` | `"Turmas 4-6 alunos"` |
| Linha 174 | `"+8.000 alunos"` | `"+2.000 alunos"` |
| Linha 188 | `"Turmas 4-8 alunos"` | `"Turmas 4-6 alunos"` |
| Linha 252 | `"Turmas 4-8 alunos"` | `"Turmas 4-6 alunos"` |
| Linha 312 | `"Turmas 4-8 alunos"` | `"Turmas 4-6 alunos"` |
| Linha 372 | `"Turmas 4-8 alunos"` | `"Turmas 4-6 alunos"` |
| Linha 432 | `"Turmas 4-8 alunos"` | `"Turmas 4-6 alunos"` |
| Linha 493 | `"8.000 alunos"` | `"2.000 alunos"` |
| Linha 539 | `"+8.000 alunos"` | `"+2.000 alunos"` |

---

### 4. `src/pages/courses/OperacoesIntermediario.tsx` -- Atualizar slug de busca

- Linha 10: O slug `"operacoes-intermediario"` permanece igual (apenas o title muda no coursesData)

---

### Arquivos a Modificar

| Arquivo | Alterações |
|---------|------------|
| `src/components/About.tsx` | 500+ para 2000+ |
| `src/components/Courses.tsx` | 4-8 para 4 a 6 |
| `src/data/coursesData.ts` | Renomear cursos, atualizar turmas e números de alunos |

