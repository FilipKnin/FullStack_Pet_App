package com.codeclan.example.PetApp.projections;


import com.codeclan.example.PetApp.models.Pet;
import com.codeclan.example.PetApp.models.Owner;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedPet", types = Pet.class)
public interface EmbedPet {
    Long getId();
    String getName();
    String getType();
    Owner getOwner();



}
