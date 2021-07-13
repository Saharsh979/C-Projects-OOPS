#include <iostream>
#include <conio.h>
#include <fstream>
#include <iomanip>
#include <cstring>
#include <windows.h>
#include <bits/stdc++.h>

void menu();
void pascode();
void cpascode();

using namespace std;

class one
{
public:
  virtual void get() = 0;
  virtual void show() = 0;
}

class info : public one
{
public:
  char num[50], time[50];
  int num, age;

  void get()
  {
    system("cls");
    cin.sync();
    cout << "\n  Enter the paitent name =";
    cin.getline(name, 50);
    cout << "\n  Enter the appointment time =";
    cin.getline(time, 50);
    cout << "\n Enter Age =";
    cin >> age;
    cout << "\n Enter Appointment Number =";
    cin >> num;
  }

  void showw()
  {
    cout << "\n Name =" << name;
    cout << "\n Age =" << age;
    cout << "\n Appointment No =" << num;
    cout << "\n Appointment Time =" << time;
  }
};

class rana : public info
{
public:
  info a1;
  void get()
  {
    system("cls");
    ofstream out("rana.txt", ios::app | ios::binary);
    a1.get();
    out.write((char *)&a1, sizeof(info));
    out.close();
    cout << "Your Entry has been saved";
    getch();
    menu();
  }
  void show()
  {
    ifstream in("rana.txt");
    if (in == NULL)
    {
      cout << "\n\n No Data In the File";
      cout << "\n\n\t\tPress Any Key to Continue:";
      getch();
      menu();
    }
    else
    {
      while (!in.eof())
      {
        in.read((char *)&a1, sizeof(a1));
        a1.show();
      }
      in.close();
      cout << "Press Enter to continue:";
      getch();
      menu();
    }
  }
};

class waqar : public info
{
public:
  info a1;
  void get()
  {
    system("cls");
    ofstream out("waqar.txt", ios::app | ios::binary);
    a1.get();
    out.write((char *)&a1, sizeof(info));
    out.close();
    cout << "Your Entry has been saved";
    getch();
    menu();
  }
  void show()
  {
    ifstream in("waqar.txt");
    if (in == NULL)
    {
      cout << "\n\n No Data In the File";
      cout << "\n\n\t\tPress Any Key to Continue:";
      getch();
      menu();
    }
    else
    {
      while (!in.eof())
      {
        in.read((char *)&a1, sizeof(a1));
        a1.show();
      }
      in.close();
      cout << "Press Enter to continue:";
      getch();
      menu();
    }
  }
};

class Ahmad : public info
{
public:
  info a1;
  void get()
  {
    system("cls");
    ofstream out("ahmad.txt", ios::app | ios::binary);
    a1.get();
    out.write((char *)&a1, sizeof(info));
    out.close();
    cout << "Your Entry has been saved";
    getch();
    menu();
  }
  void show()
  {
    ifstream in("ahmad.txt");
    if (in == NULL)
    {
      cout << "\n\n No Data In the File";
      cout << "\n\n\t\tPress Any Key to Continue:";
      getch();
      menu();
    }
    else
    {
      while (!in.eof())
      {
        in.read((char *)&a1, sizeof(a1));
        a1.show();
      }
      in.close();
      cout << "Press Enter to continue:";
      getch();
      menu();
    }
  }
};

class staff : public one
{
public:
  char all[999];
  char name[50], age[20], sal[30], pos[20];

  void get()
  {
    ofstream out("staff,txt", ios::app);
    system("cls");
    cin.sync();
    cout << "\nEnter Name = ";
    cin.getline(name, 50);
    cout << "\nEnter Age = ";
    cin.getline(age, 20);
    cout << "\nEnter Salarry = ";
    cin.getline(salary, 30);
    cout << "\nEnter Working Position = ";
    cin.getline(pos, 20);

    out << "\n Name -" << name << "\n Age -" << age << "\n Salary -" << sal << "\n Working Position -" << pos;
    out.close();
    cout << "\n\n Your Information has been saved :\n\t\t\tPress any key to continue :";
    getch();
    menu();
  }

  void show()
  {
    ifstream in("staff.txt");
    if (!in)
    {
      cout << "File open error";
    }
    while (!(in.eof()))
    {
      in.getline(all, 999);
      cout << all << endl;
    }
    in.close();
    cout << "\n\n\t\t\t Press any key to continue: ";
    getch();
    menu();
  }
};