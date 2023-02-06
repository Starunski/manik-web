function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="EditPost" component={EditPost} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }