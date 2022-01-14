package com.vinicius.todo.services;

import com.vinicius.todo.domain.Todo;
import com.vinicius.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

@Service
public class DBService {

    @Autowired
    TodoRepository todoRepository;

    @Autowired
    TodoService service;

    public void instanciaBaseDeDados() throws ParseException {

        service.deleteAll();
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

        Todo t1 = new Todo(null, "Estudar", "Estudar Spring Boot 2 e Angular 11", sdf.parse("25/03/2022"), false);
        Todo t2 = new Todo(null, "ler", "Ler Livro de desenvolvimento pessoal", sdf.parse("22/03/2022"), true);
        Todo t3 = new Todo(null, "Exercicios", "Praticar exercicios fisicos", sdf.parse("21/03/2022"), false);
        Todo t4 = new Todo(null, "Meditar", "Meditar durante 30 minutos pela manhã", sdf.parse("27/03/2022"), true);
        todoRepository.saveAll(Arrays.asList(t1,t2,t3,t4));
    }

}
