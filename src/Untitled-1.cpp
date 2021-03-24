#include<iostream>


using namespace std;
static int a = 7;
static int b = 6;

string encrypt(string m) 
{
   string c = "";
   for (int i = 0; i < m.length(); i++) 
    {  
        if(m[i] != ' ')
            c = c + (char)((((a * (m[i] - 'A') ) + b) % 26) + 'A');
        else
            c += m[i];
    }
    return c;
}

string decrypt(string c) 
{
    string m = "";
    int aInverse = 0;
    int flag = 0;

    for (int i = 0; i < 26; i++)
    {
        flag = (a * i) % 26;
        if (flag == 1) 
        {
            aInverse = i;
        }
    }

    for (int i = 0; i < c.length(); i++)
    {
        if (c[i] != ' ')
            m = m + (char)(((aInverse * ((c[i]+'A' - b)) % 26)) + 'A');
        else
            m += c[i];
    }
    return m;
}

int main(void) 
{
    string msg = "DAIHOCSAIGON";
    string c = encrypt(msg);
    cout << "Van ban da ma hoa la: " << c <<endl;
    cout << "Van ban da giai ma la: " << decrypt(c);
    return 0;
}
