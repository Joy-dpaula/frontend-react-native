import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            contentStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='home' options={{ headerShown: false }} />
            <Stack.Screen name='create-account' options={{ title: "Cadastre-se" }} />
            <Stack.Screen name='show-pass' options={{ title: "Ver senha"}} />
            <Stack.Screen name='update' options={{ title: "Editar conta"}} />
            <Stack.Screen name='signup' options={{ title: "Criar conta"}} />
            <Stack.Screen name='login' options={{ title: "Entrar"}} />
        </Stack>
    )
}