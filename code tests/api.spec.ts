import { test, expect } from '@playwright/test';

test.describe('Testes de API - JSONPlaceholder', () => {
  
  test('GET - Listar posts', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
  });

  test('POST - Criar novo post', async ({ request }) => {
    const novoPost = {
      title: 'Meu post de teste',
      body: 'Conteúdo do post',
      userId: 1
    };

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: novoPost
    });
    
    expect(response.status()).toBe(201);
    
    const body = await response.json();
    expect(body.id).toBeDefined();
    expect(body.title).toBe(novoPost.title);
  });

  test('PUT - Atualizar post', async ({ request }) => {
    const postAtualizado = {
      id: 1,
      title: 'Título atualizado',
      body: 'Conteúdo novo',
      userId: 1
    };

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
      data: postAtualizado
    });
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.title).toBe('Título atualizado');
  });

  test('DELETE - Deletar post', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    
    expect(response.status()).toBe(200);
  });

});