

## Plano: Adicionar Links nos Botões de CTA

### Visão Geral

Vamos adicionar o link do WhatsApp nos botões de conversão e fazer o botão "Conheça os Cursos" rolar para a seção de cursos.

**Link do WhatsApp:** `https://api.whatsapp.com/send/?phone=5519999291984&text&type=phone_number&app_absent=0`

---

### Botões a Modificar

| Botão | Localização | Ação |
|-------|-------------|------|
| "Inscreva-se na Próxima Turma" | Hero.tsx | Abrir WhatsApp |
| "Conheça os Cursos" | Hero.tsx | Scroll para #cursos |
| "Fale com um Especialista" | Courses.tsx | Abrir WhatsApp |
| "Inscreva-se Agora" | CoursePage.tsx | Abrir WhatsApp |
| "Fale com um Especialista" | CoursePage.tsx | Abrir WhatsApp |

---

### 1. Arquivo: `src/components/Hero.tsx`

**Alterações:**

**Botão "Inscreva-se na Próxima Turma"** (linha 39-42):
- Transformar em link que abre o WhatsApp em nova aba

**Botão "Conheça os Cursos"** (linha 43-45):
- Adicionar onClick para scroll suave até a seção `#cursos`

```tsx
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
  <a 
    href="https://api.whatsapp.com/send/?phone=5519999291984&text&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="cta" size="xl" className="group">
      Inscreva-se na Próxima Turma
      <ArrowRight className="transition-transform group-hover:translate-x-1" />
    </Button>
  </a>
  <Button 
    variant="outlineLight" 
    size="xl"
    onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
  >
    Conheça os Cursos
  </Button>
</div>
```

---

### 2. Arquivo: `src/components/Courses.tsx`

**Alterações:**

**Botão "Fale com um Especialista"** (linha 194-196):
- Envolver com tag `<a>` apontando para WhatsApp

```tsx
<div className="text-center pt-8">
  <a 
    href="https://api.whatsapp.com/send/?phone=5519999291984&text&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="cta" size="xl">
      Fale com um Especialista
    </Button>
  </a>
</div>
```

---

### 3. Arquivo: `src/pages/courses/CoursePage.tsx`

**Alterações:**

Definir constante do WhatsApp no início do componente:
```tsx
const whatsappLink = "https://api.whatsapp.com/send/?phone=5519999291984&text&type=phone_number&app_absent=0";
```

**Botão "Inscreva-se Agora"** (linha 52-56):
- Mudar onClick para abrir WhatsApp

**Botão "Fale com um Especialista"** (linha 226-228):
- Mudar onClick para abrir WhatsApp

```tsx
// Linha 52-56: Inscreva-se Agora
<div className="pt-6">
  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
    <Button variant="cta" size="xl">
      Inscreva-se Agora
    </Button>
  </a>
</div>

// Linha 226-228: Fale com um Especialista
<a href={whatsappLink} target="_blank" rel="noopener noreferrer">
  <Button variant="cta" size="xl">
    Fale com um Especialista
  </Button>
</a>
```

---

### Arquivos a Modificar

| Arquivo | Alterações |
|---------|------------|
| `src/components/Hero.tsx` | Adicionar link WhatsApp no botão CTA + scroll no botão secundário |
| `src/components/Courses.tsx` | Adicionar link WhatsApp no botão "Fale com um Especialista" |
| `src/pages/courses/CoursePage.tsx` | Adicionar link WhatsApp nos 2 botões CTA |

---

### Resultado Esperado

- Ao clicar em **"Inscreva-se na Próxima Turma"**, **"Fale com um Especialista"** ou **"Inscreva-se Agora"**: Abre o WhatsApp com o número (19) 99929-1984
- Ao clicar em **"Conheça os Cursos"**: Rola suavemente para a seção de cursos na página

