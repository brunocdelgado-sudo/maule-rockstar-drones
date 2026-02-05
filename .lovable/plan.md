

## Plano: Alterar Botão "Fale Conosco" para WhatsApp

### Problema Identificado

O botão "Fale Conosco" no header (desktop e mobile) está configurado para rolar até a seção de contato (`scrollToSection("contato")`), mas deve abrir o WhatsApp diretamente.

---

### Arquivo a Modificar

**`src/components/Header.tsx`**

---

### Alterações

#### 1. Botão Desktop (linha 75-81)

**Antes:**
```tsx
<Button 
  variant="cta" 
  size="sm"
  onClick={() => scrollToSection("contato")}
>
  Fale Conosco
</Button>
```

**Depois:**
```tsx
<a 
  href="https://api.whatsapp.com/send/?phone=5519999291984&text&type=phone_number&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="cta" size="sm">
    Fale Conosco
  </Button>
</a>
```

---

#### 2. Botão Mobile (linha 105-116)

**Antes:**
```tsx
<Button 
  variant="cta" 
  className="w-full"
  onClick={() => {
    scrollToSection("contato");
    setIsMobileMenuOpen(false);
  }}
>
  Fale Conosco
</Button>
```

**Depois:**
```tsx
<a 
  href="https://api.whatsapp.com/send/?phone=5519999291984&text&type=phone_number&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setIsMobileMenuOpen(false)}
>
  <Button variant="cta" className="w-full">
    Fale Conosco
  </Button>
</a>
```

---

### Resultado Esperado

| Botão | Localização | Ação |
|-------|-------------|------|
| "Fale Conosco" | Header Desktop | Abre WhatsApp em nova aba |
| "Fale Conosco" | Header Mobile | Abre WhatsApp + fecha menu mobile |

