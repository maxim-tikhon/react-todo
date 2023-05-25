/// <reference types="cypress" />

import { TODO_STOARGE_NAME } from '../../src/utils/constants';

describe('to-do app', () => {
  beforeEach(() => {
    const defaultTasks = [
      { id: '1', description: 'Task 1', completed: false },
      { id: '2', description: 'Task 2', completed: true },
    ];

    localStorage.setItem(TODO_STOARGE_NAME, JSON.stringify(defaultTasks));
    cy.visit('http://localhost:3000/');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('displays input for adding new task', () => {
    cy.get('input[type=text]').should('be.visible');
  });

  it('displays 2 tasks from local storage by default', () => {
    cy.get('[data-testid=task]').should('have.length', 2);
    cy.get('[data-testid=task]').first().should('have.text', 'Task 1');
    cy.get('[data-testid=task]').last().should('have.text', 'Task 2');
    cy.contains('1 task left').should('be.visible');
  });

  it('can add a new task', () => {
    cy.get('input[type=text]').type('New Task').type('{enter}');

    cy.get('[data-testid=task]').should('have.length', 3).last().should('have.text', 'New Task');
    cy.contains('2 tasks left').should('be.visible');
  });

  it('can check a task as completed', () => {
    cy.contains('Task 1').parent().find('input[type=checkbox]').check();

    cy.contains('Task 1').invoke('css', 'text-decoration').should('include', 'line-through');
    cy.contains('All tasks completed').should('be.visible');
  });

  it('can uncheck a task', () => {
    cy.contains('Task 2').parent().find('input[type=checkbox]').uncheck();

    cy.contains('Task 2').invoke('css', 'text-decoration').should('not.include', 'line-through');
  });

  it('can delete a task', () => {
    cy.contains('Task 1').parent().find('[data-testid=ClearIcon]').click();

    cy.get('[data-testid=task]').should('have.length', 1);
  });

  it('can filter for active tasks', () => {
    cy.contains('Active').click();

    cy.get('[data-testid=task]').should('have.length', 1);
  });

  it('can filter for completed tasks', () => {
    cy.contains('Completed').click();

    cy.get('[data-testid=task]').should('have.length', 1);
  });

  it('can clear completed tasks', () => {
    cy.contains('Clear Completed').click();

    cy.get('[data-testid=task]').should('have.length', 1);
  });
});
