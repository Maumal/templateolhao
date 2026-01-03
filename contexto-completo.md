# 📋 CONTEXTO COMPLETO DO PROJETO

## 🎯 VISÃO GERAL

**Nome do Projeto:** Linha de Produtos Afiliáveis Hotmart  
**Conceito:** Ferramentas digitais simples (HTML offline → PWA mobile) que resolvem dores práticas de autônomos  
**Modelo:** Pagamento único, sem mensalidade, 40% comissão para afiliados  
**Posicionamento:** "Funções isoladas de SaaS, vendidas sem mensalidade"

---

## 📊 STATUS ATUAL (2026-01-03 - 16h00)

### ✅ CONCLUÍDO HOJE

**PostFácil:**
- ✅ Adicionado ícone WhatsApp clicável no footer
- ✅ Campo editável para número WhatsApp
- ✅ CTA alterado para @ handle (@sua_loja)
- ✅ Seção "Loja" renomeada para "WhatsApp"
- ✅ Upload de logo personalizado implementado
- ✅ Repositório separado criado: `~/Documentos/git/postfacil/`

**Decisões Importantes:**
- ✅ **PWA Mobile** - 70% dos usuários não têm PC
- ✅ **Hotmart Club** - Proteção de acesso (só quem comprou vê o link)
- ✅ **Vercel/Netlify** - Hospedagem grátis (100k visitas/mês)
- ✅ **Repositório separado** - Cada produto = 1 repo = 1 deploy

---

## 🛠️ PRÓXIMOS PASSOS (PostFácil)

### 1. Criar repo no GitHub
```bash
# No terminal, pasta ~/Documentos/git/postfacil/
git remote add origin git@github.com:Maumal/postfacil.git
git branch -M main
git push -u origin main
```

### 2. Transformar em PWA responsivo
- [x] Criar `manifest.json`
- [x] Criar `service-worker.js`
- [x] Ícones PWA (192px e 512px)
- [x] Meta tags Apple e Open Graph
- [ ] Tornar layout mobile-first (menu hambúrguer)
- [ ] Testar em celular

### 3. Deploy no Vercel
- [ ] Conectar repo ao Vercel
- [ ] Gerar link (ex: postfacil-xxx.vercel.app)
- [ ] Testar funcionamento

### 4. Configurar Hotmart
- [ ] Criar produto no Hotmart
- [ ] Ativar Hotmart Club (área de membros)
- [ ] Colocar link do Vercel na área de membros
- [ ] Configurar afiliados (40% comissão)

---

## 📁 ESTRUTURA NOVA

```
GitHub (Maumal):
├── produtos-afiliaveis-hotmart/   ← Documentação geral
├── postfacil/                     ← ✅ Repo separado (deploy Vercel)
├── valorhora/                     ← Futuro
├── precificafacil/                ← Futuro
└── ...
```

---

## 🔥 PostFácil - Modelo Final

**Distribuição:**
- NÃO é mais arquivo HTML para baixar
- É link de app web (PWA) hospedado

**Fluxo do Cliente:**
1. Compra no Hotmart (R$ 67)
2. Recebe acesso à área de membros
3. Clica no link do PostFácil
4. Abre no celular/PC
5. Adiciona à tela inicial (opcional)
6. Usa offline após primeira carga

**Proteção:**
- Hotmart Club controla quem acessa
- Link não é óbvio (postfacil-x7k.vercel.app)
- Repositório privado no GitHub

---

## 🧰 LINHA DE PRODUTOS (6 Core)

### 🥇 Prioridade A (Q1 2026)

| Produto | Preço | Status | Complexidade |
|---------|-------|--------|--------------|
| **PostFácil** | R$ 67 | 🔵 PWA em progresso | Concluindo |
| **ValorHora** | R$ 27-37 | ⚪ Backlog | Fácil (2-3h) |
| **PrecificaFácil** | R$ 67 | ⚪ Backlog | Média (3-4h) |

### 🥈 Prioridade B (Q2 2026)

| Produto | Preço | Status | Complexidade |
|---------|-------|--------|--------------|
| **LucroOuPreju** | R$ 37-47 | ⚪ Backlog | Fácil (2-3h) |
| **OrçaPro** | R$ 67-97 | ⚪ Backlog | Média-Alta |
| **PropostaExpress** | R$ 37-47 | ⚪ Backlog | Média |

---

## 💰 PROJEÇÃO DE RECEITA (6 Produtos)

**Cenário Conservador (Ano 1):**
- 6 produtos × 3 vendas/mês × R$ 50 (média) = R$ 900/mês
- Ano: R$ 10.800 bruto

**Cenário Otimista (com afiliados):**
- 6 produtos × 8 vendas/mês × R$ 55 (média) = R$ 2.640/mês
- Ano: R$ 31.680 bruto

---

## 🤝 PADRÃO PARA TODA A LINHA

- Comissão: 40%
- Cookie: 60 dias
- Aprovação: Automática
- Pitch: 1 frase
- Demo: 30 segundos
- Entrega: **Link para PWA** (via Hotmart Club)

---

**Última atualização:** 2026-01-03 16:12  
**Próxima ação:** Menu hambúrguer mobile-first → Testar em celular → Deploy Vercel