package com.farm_mate.backend.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user_table")
public class UserEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @OneToMany(mappedBy = "postAuthor", cascade = CascadeType.ALL, orphanRemoval = true)
    private final List<PostEntity> posts = new ArrayList<>();

    //adding new post with author
    public void addPost(PostEntity post) {
        posts.add(post);
        post.setPostAuthor(this);
    }

    //removing posts and author
    public void removePost(PostEntity post) {
        posts.remove(post);
        post.setPostAuthor(null);
    }

    public List<PostEntity> getPosts() {
        return posts;
    }

    public String getPassword() {
        return password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
