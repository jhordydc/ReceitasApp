
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RecipeScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.subtitle}>Tempo de preparo:</Text>
      <Text style={styles.text}>{recipe.time}</Text>
      <Text style={styles.subtitle}>Nível de dificuldade:</Text>
      <Text style={styles.text}>{recipe.difficulty}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <Text style={styles.text}>{recipe.ingredients}</Text>
      <Text style={styles.subtitle}>Modo de preparo:</Text>
      <Text style={styles.text}>{recipe.instructions}</Text>
      <Text style={styles.subtitle}>Categoria:</Text>
      <Text style={styles.text}>{recipe.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 10,
  },
});

export default RecipeScreen;

