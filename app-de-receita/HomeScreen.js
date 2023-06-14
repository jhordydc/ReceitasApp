import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Array de receitas
  const recipes = [
    {
      id: 1,
      title: 'Strogonoff',
      image: require('./assets/images/strogonoff.jpg'),
      time: '30 minutos',
      difficulty: 'Fácil',
      ingredients: '500g de filé mignon\n1 cebola\n2 dentes de alho\n200g de champignon\n1 lata de creme de leite\n3 colheres de sopa de ketchup\n3 colheres de sopa de mostarda\nSal e pimenta a gosto',
      instructions: '1. Em uma panela, aqueça o óleo e refogue a cebola e o alho.\n2. Acrescente a carne cortada em tiras e frite até dourar.\n3. Adicione o champignon e refogue por mais alguns minutos.\n4. Acrescente o ketchup, a mostarda, o sal e a pimenta.\n5. Misture bem e adicione o creme de leite.\n6. Cozinhe por mais alguns minutos, mexendo sempre.\n7. Sirva com arroz branco e batata palha.',
      category: 'Prato Principal',
    },
    {
      id: 2,
      title: 'Macarrão',
      image: require('./assets/images/macarrao.jpg'),
      time: '20 minutos',
      difficulty: 'Fácil',
      ingredients: '200g de macarrão\n2 colheres de sopa de azeite\n2 dentes de alho picados\n1 lata de tomate pelado\nSal e pimenta a gosto\nQueijo parmesão ralado',
      instructions: '1. Em uma panela, cozinhe o macarrão conforme as instruções da embalagem.\n2. Enquanto isso, em outra panela, aqueça o azeite e refogue o alho.\n3. Adicione o tomate pelado, o sal e a pimenta.\n4. Cozinhe por alguns minutos, mexendo ocasionalmente.\n5. Escorra o macarrão e adicione ao molho de tomate.\n6. Misture bem para que o macarrão fique envolvido no molho.\n7. Sirva com queijo parmesão ralado por cima.',
      category: 'Prato Principal',
    },
    {
      id: 3,
      title: 'Bolo',
      image: require('./assets/images/bolo.jpg'),
      time: '40 minutos',
      difficulty: 'Médio',
      ingredients: '3 ovos\n2 xícaras de açúcar\n3 xícaras de farinha de trigo\n1 xícara de leite\n1/2 xícara de óleo\n1 colher de sopa de fermento em pó',
      instructions: '1. Pré-aqueça o forno a 180°C e unte uma forma redonda com manteiga e farinha.\n2. Em uma tigela, bata os ovos e o açúcar até obter uma mistura cremosa.\n3. Adicione a farinha de trigo, o leite e o óleo, e misture bem.\n4. Por último, acrescente o fermento em pó e misture delicadamente.\n5. Despeje a massa na forma preparada e leve ao forno por aproximadamente 30 minutos, ou até que o bolo esteja dourado e firme ao toque.\n6. Retire do forno e deixe esfriar antes de desenformar.\n7. Sirva o bolo simples ou com a cobertura de sua preferência.',
      category: 'Sobremesa',
    },
  ];

  // Função para lidar com o pressionar de uma receita
  const handleRecipePress = (recipe) => {
    navigation.navigate('Receita', { recipe });
  };

  return (
    <View>
      <View style={{ backgroundColor: 'red', padding: 10, marginBottom: 0 }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          Faça você mesmo
        </Text>
      </View>
      <View style={{  padding: 10, marginBottom: 10 }}>
        <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold' }}>
          Encontre a receita que combina com você
        </Text>
      </View>
      {recipes.map((recipe) => (
        <TouchableOpacity
          key={recipe.id}
          onPress={() => handleRecipePress(recipe)}
        >
          <View style={{ borderRadius: 20, overflow: 'hidden', margin: 10 }}>
            <Image
              source={recipe.image}
              style={{ width: '100%',borderRadius: 20, height: 200 }}
            />
            <Text style={{ textAlign: 'center', fontSize: 18 }}>
              {recipe.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeScreen;

