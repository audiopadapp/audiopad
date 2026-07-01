#if defined(__linux__)
#pragma once
#include <gdk/gdk.h>

namespace Audiopad
{
    namespace LibWnck
    {
        struct Screen;
        struct Window;

        inline Screen *(*getDefaultScreen)();
        inline void (*forceUpdate)(Screen *);
        inline int (*getWindowPID)(Window *);
        inline GList *(*getScreenWindows)(Screen *);
        inline GdkPixbuf *(*getWindowIcon)(Window *);

        bool setup();
    } // namespace LibWnck
} // namespace Audiopad
#endif