#include <bits/stdc++.h>

using namespace std;

class GameSetting
{
    static GameSetting *_instance;
    int _brightness;
    int _width;
    int _height;
    GameSetting() : _width(787), _height(1300), _brightness(75) {}

public:
    static GameSetting *getInstance()
    {
        if (_instance == NULL)
        {
            _instance = new GameSetting();
            return _instance;
        }
    }
    void setWidth(int width)
    {
        _width = width;
    }
    void setHeight(int height)
    {
        _height = height;
    }
    void setBrightness(int brightness)
    {
        _brightness = brightness;
    }
    int getWidth()
    {
        return _width;
    }
    int getHeight()
    {
        return _height;
    }
    int getBrightness()
    {
        return _brightness;
    }

    void displaySettings()
    {
        cout << "Brightness" << _brightness << endl;
        cout << "Height" << _height << endl;
        cout << "Width" << _width << endl;
    }
};
GameSetting *GameSetting::_instance = NULL;
int main()
{
    GameSetting *setting = GameSetting::getInstance();
    setting->displaySettings();
    //We can invoke this instance and call functions at any point any where.
}